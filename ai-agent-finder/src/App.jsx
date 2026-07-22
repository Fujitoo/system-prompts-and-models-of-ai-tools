import { useState, useMemo } from 'react'
import { agentsData, taskCategories, agentTaskMapping, comparisonFactors } from './data/agentsData'
import './App.css'

function App() {
  const [selectedTask, setSelectedTask] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showComparison, setShowComparison] = useState(false)
  const [selectedAgents, setSelectedAgents] = useState([])

  // Get recommended agents for selected task
  const recommendedAgents = useMemo(() => {
    if (!selectedTask) return []
    const agentIds = agentTaskMapping[selectedTask] || []
    return agentsData.filter(agent => agentIds.includes(agent.id))
  }, [selectedTask])

  // Filter agents by search query
  const filteredAgents = useMemo(() => {
    if (!searchQuery.trim()) return agentsData
    const query = searchQuery.toLowerCase()
    return agentsData.filter(agent => 
      agent.name.toLowerCase().includes(query) ||
      agent.company.toLowerCase().includes(query) ||
      agent.description.toLowerCase().includes(query) ||
      agent.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [searchQuery])

  // Toggle agent selection for comparison
  const toggleAgentSelection = (agentId) => {
    setSelectedAgents(prev => 
      prev.includes(agentId) 
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId].slice(0, 3) // Limit to 3 agents
    )
  }

  // Get agents for comparison
  const agentsToCompare = useMemo(() => {
    return agentsData.filter(agent => selectedAgents.includes(agent.id))
  }, [selectedAgents])

  return (
    <div className="app">
      {/* Header with AEO-optimized content */}
      <header className="header">
        <div className="container">
          <h1>AI Agent Finder</h1>
          <p className="subtitle">Find the perfect AI coding assistant for your specific task</p>
          <p className="description">
            Compare Claude Code, Cursor, Devin AI, GitHub Copilot, and other leading AI coding assistants. 
            Get personalized recommendations based on your development needs.
          </p>
        </div>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search AI agents by name, feature, or use case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search AI coding assistants"
            />
          </div>
        </div>
      </section>

      {/* Task Categories */}
      <section className="tasks-section">
        <div className="container">
          <h2>What do you want to build?</h2>
          <p className="section-description">Select your primary use case to get personalized AI agent recommendations</p>
          <div className="task-grid">
            {taskCategories.map(task => (
              <button
                key={task.id}
                className={`task-card ${selectedTask === task.id ? 'active' : ''}`}
                onClick={() => setSelectedTask(task.id === selectedTask ? null : task.id)}
                aria-pressed={selectedTask === task.id}
              >
                <span className="task-icon">{task.icon}</span>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      {selectedTask && (
        <section className="recommendations-section">
          <div className="container">
            <h2>Best AI Agents for {taskCategories.find(t => t.id === selectedTask)?.name}</h2>
            <div className="agents-list">
              {recommendedAgents.map((agent, index) => (
                <article key={agent.id} className="agent-card featured">
                  <div className="agent-rank">#{index + 1} Recommendation</div>
                  <div className="agent-header">
                    <h3>{agent.name}</h3>
                    <span className="company">{agent.company}</span>
                  </div>
                  <p className="agent-description">{agent.description}</p>
                  <div className="agent-details">
                    <div className="strengths">
                      <h4>✅ Strengths</h4>
                      <ul>
                        {agent.strengths.slice(0, 3).map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="best-for">
                      <h4>🎯 Best For</h4>
                      <ul>
                        {agent.bestFor.slice(0, 2).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="agent-footer">
                    <span className="pricing">{agent.pricing}</span>
                    <a href={agent.url} target="_blank" rel="noopener noreferrer" className="visit-link">
                      Visit Website →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Agents Grid */}
      <section className="agents-section">
        <div className="container">
          <h2>All AI Coding Assistants</h2>
          <p className="section-description">
            Browse our complete list of AI coding assistants. Click to compare up to 3 agents side-by-side.
          </p>
          <div className="agents-grid">
            {filteredAgents.map(agent => (
              <article key={agent.id} className="agent-card">
                <div className="agent-header">
                  <h3>{agent.name}</h3>
                  <span className="company">{agent.company}</span>
                </div>
                <p className="agent-description">{agent.description}</p>
                <div className="tags">
                  {agent.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <label className="compare-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedAgents.includes(agent.id)}
                      onChange={() => toggleAgentSelection(agent.id)}
                      disabled={!selectedAgents.includes(agent.id) && selectedAgents.length >= 3}
                    />
                    Compare
                  </label>
                  <a href={agent.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
                    Visit
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Modal */}
      {agentsToCompare.length >= 2 && (
        <section className="comparison-section">
          <div className="container">
            <div className="comparison-header">
              <h2>Compare AI Agents</h2>
              <button onClick={() => setSelectedAgents([])} className="close-btn">
                Clear Comparison
              </button>
            </div>
            <div className="comparison-grid">
              <div className="comparison-factor-col">
                <div className="factor-header">Feature</div>
                {comparisonFactors.map(factor => (
                  <div key={factor.id} className="factor-row">
                    <strong>{factor.name}</strong>
                    <small>{factor.description}</small>
                  </div>
                ))}
                <div className="factor-row">
                  <strong>Pricing</strong>
                </div>
                <div className="factor-row">
                  <strong>Best For</strong>
                </div>
              </div>
              {agentsToCompare.map(agent => (
                <div key={agent.id} className="comparison-agent-col">
                  <div className="agent-header-small">
                    <h3>{agent.name}</h3>
                  </div>
                  {comparisonFactors.map(factor => (
                    <div key={factor.id} className="factor-row agent-rating">
                      <div className="rating-dots">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`dot ${i < 4 ? 'filled' : ''}`}>●</span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="factor-row">
                    <span className="pricing-text">{agent.pricing}</span>
                  </div>
                  <div className="factor-row best-for-list">
                    <ul>
                      {agent.bestFor.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section for AEO */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <article className="faq-item">
              <h3>Which AI coding assistant is best for beginners?</h3>
              <p>
                For beginners, we recommend <strong>GitHub Copilot</strong> or <strong>Cursor</strong>. 
                Both offer intuitive interfaces and excellent autocomplete features that help new developers 
                learn while coding. GitHub Copilot integrates seamlessly with popular IDEs, while Cursor 
                provides a more comprehensive AI-first coding experience.
              </p>
            </article>
            <article className="faq-item">
              <h3>What's the difference between Claude Code and Cursor?</h3>
              <p>
                <strong>Claude Code</strong> excels at complex reasoning and multi-step tasks with deep 
                context understanding, making it ideal for enterprise codebases and security-critical applications. 
                <strong>Cursor</strong> offers a more integrated IDE experience with superior code navigation 
                and editing capabilities, perfect for daily development work and quick prototyping.
              </p>
            </article>
            <article className="faq-item">
              <h3>Is Devin AI suitable for autonomous development?</h3>
              <p>
                Yes, <strong>Devin AI</strong> is specifically designed for autonomous software development tasks. 
                It can handle entire projects from planning to deployment with minimal human intervention, 
                making it ideal for full project development, automated testing, and DevOps workflows.
              </p>
            </article>
            <article className="faq-item">
              <h3>Which AI agent is best for frontend development?</h3>
              <p>
                For frontend development, <strong>v0 by Vercel</strong> is exceptional for generating React 
                components and UI designs. <strong>Cursor</strong> and <strong>Windsurf</strong> also excel 
                at frontend work with their intelligent code completion and multi-file editing capabilities.
              </p>
            </article>
            <article className="faq-item">
              <h3>Are free AI coding assistants worth using?</h3>
              <p>
                Yes! Many AI coding assistants offer generous free tiers. <strong>GitHub Copilot</strong> has 
                a free tier for students, <strong>Cursor</strong> offers a free plan with basic features, and 
                <strong>Replit Ghostwriter</strong> includes AI assistance in its free tier. These are great 
                for learning and small projects before upgrading to paid plans.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            AI Agent Finder helps developers choose the right AI coding assistant for their needs. 
            Compare features, pricing, and capabilities to make informed decisions.
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} AI Agent Finder. Built with Vite and React.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
