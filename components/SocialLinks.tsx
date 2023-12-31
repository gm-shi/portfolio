import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
  return (
    <div
      className="btn-wrapper text-lg"
      style={{ display: 'flex', alignItems: 'baseline', marginTop: 10 }}
    >
      {socialLinks.url && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.url}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-link" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-facebook-square" />
          </span>
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-twitter" />
          </span>
        </Button>
      )}

      {socialLinks.resumeLink && (
        <Button
          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
          color="default"
          href={socialLinks.resumeLink}
          target="_blank"
          rel="noreferrer"
        >
          <span className="btn-inner--icon mr-1">
            <i className="fa fa-file" />
          </span>
          <span className="btn-inner--text">See My Resume</span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
