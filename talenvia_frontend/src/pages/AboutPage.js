import React from "react";
import { Card } from "../components/ui/Card";

// PUBLIC_INTERFACE
export function AboutPage() {
  /** About Talenvia informational page. */
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">
          Talenvia is a modern career platform built to help you present your skills clearly, discover the right roles, and grow with confidence.
        </p>
      </div>

      <div className="stack">
        <Card title="About Talenvia" subtitle="Career growth, made practical">
          <div style={{ lineHeight: 1.7 }}>
            Talenvia is a career-focused platform that helps you build a stronger profile, showcase your skills, and find opportunities that fit.
            It brings together job discovery, skill visibility, and guided decision-making in one place—so your next step feels clear and
            achievable.
            <br />
            <br />
            Built for students, freshers, and early-career professionals, Talenvia addresses common early-stage challenges: unclear skill
            positioning, scattered applications, and limited direction on what to improve next. With personalized preferences and AI-supported
            guidance, you can move from “searching” to “progressing” with a plan.
          </div>
        </Card>

        <Card title="What you can do on Talenvia" subtitle="Everything you need to stay job-ready and job-relevant">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
            <li>
              <strong>Profile &amp; skill management:</strong> Organize your skills and strengths so recruiters and roles align with what you can do.
            </li>
            <li>
              <strong>Resume upload and updates:</strong> Keep your resume current and ready for the right opportunities.
            </li>
            <li>
              <strong>Job discovery &amp; matching:</strong> Explore roles with smarter relevance so you spend time on the right applications.
            </li>
            <li>
              <strong>Career preferences &amp; personalization:</strong> Set what you want and get results that reflect your goals.
            </li>
            <li>
              <strong>AI-driven guidance:</strong> Get recommendations and direction on roles, skills, and next steps—like a practical mentor in your workflow.
            </li>
          </ul>

          <div className="muted" style={{ marginTop: 12, lineHeight: 1.7 }}>
            Talenvia is built to be reliable, respectful of your journey, and focused on long-term career success—one informed step at a time.
          </div>
        </Card>

        <Card title="Mission & Values" subtitle="A practical approach to career growth">
          <div style={{ lineHeight: 1.7 }}>
            Our mission is to help early-career talent turn skills into opportunities—by making profiles clearer, job discovery more relevant, and
            next steps easier to act on.
          </div>

          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, marginTop: 12 }}>
            <li>
              <strong>Clarity:</strong> Simple, structured ways to present your skills and goals.
            </li>
            <li>
              <strong>Relevance:</strong> Matches and recommendations designed to reduce noise and improve fit.
            </li>
            <li>
              <strong>Progress:</strong> Guidance that helps you improve continuously—not just apply repeatedly.
            </li>
            <li>
              <strong>Trust:</strong> A respectful, user-first experience that supports long-term career success.
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
}
