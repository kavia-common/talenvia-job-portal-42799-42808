import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { mockUserProfile } from "../mock/mockData";

// PUBLIC_INTERFACE
export function ProfilePage() {
  /** Profile view/edit page (currently mock/local). */
  const [profile, setProfile] = useState(mockUserProfile);
  const [editMode, setEditMode] = useState(false);
  const [skillsText, setSkillsText] = useState(profile.skills.join(", "));

  const parsedSkills = useMemo(() => {
    return skillsText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }, [skillsText]);

  function save() {
    // TODO: wire to backend profile update endpoint.
    setProfile((p) => ({ ...p, skills: parsedSkills }));
    setEditMode(false);
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">User Profile</h1>
        <p className="page-subtitle">
          View and edit your profile. Changes are local-only in mock mode.
          <span className="muted"> (TODO: persist to backend.)</span>
        </p>
      </div>

      <Card
        title={profile.fullName}
        subtitle={`${profile.headline} • ${profile.location}`}
        actions={
          editMode ? (
            <>
              <Button variant="primary" onClick={save}>
                Save
              </Button>
              <Button variant="ghost" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={() => setEditMode(true)}>
              Edit
            </Button>
          )
        }
      >
        {editMode ? (
          <div className="stack">
            <Input
              id="fullName"
              label="Full name"
              value={profile.fullName}
              onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            />
            <Input
              id="headline"
              label="Headline"
              value={profile.headline}
              onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
            />
            <Input
              id="location"
              label="Location"
              value={profile.location}
              onChange={(e) => setProfile({ ...profile, location: e.target.value })}
            />
            <Input
              id="skills"
              label="Skills"
              hint="Comma-separated list, e.g., React, CSS, APIs"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
            />
            <div>
              <label className="label" htmlFor="bio">
                Bio
              </label>
              <textarea
                id="bio"
                className="input"
                rows={5}
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <div className="stack">
            <div>
              <div className="label">Skills</div>
              <div className="row">
                {profile.skills.map((s) => (
                  <Badge key={s} variant="primary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="label">Bio</div>
              <div style={{ lineHeight: 1.6 }}>{profile.bio}</div>
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
