import { Button } from 'react-bootstrap';

export default function Experience() {
  return (
    <section id='experience'>
      <h3>
        <Button className='experience-btn' variant='primary'>
          EXPERIENCE
        </Button>
      </h3>
      <div>
        <div>
          <div>
            <div>Senior Front-End Developer</div>
            <div>Jan 2022 - present</div>
          </div>
          <p>Ally Bank, Remote</p>
          <ul>
            <li>
              Leveraged third-party observability tooling to monitor site
              performance, error rates, view session replays, and troubleshoot
              errors Leveraged Akamai CDN features for site redirects between
              domains
            </li>
            <li>
              Provisioned infrastructure for a federated application using
              Terraform, AWS, and GitLab CI
            </li>
            <li>
              Configured scanning for vulnerabilities via GitLab CI and managed
              vulnerability remediation
            </li>
            <li>
              Supported developer experience through official support channels
              and hosted Zoom Office Hours on a regular basis
            </li>
            <li>
              Created and maintained the application architecture for a
              federated application, allowing for more stable, frequent,
              decoupled releases of front-end features, gated using LaunchDarkly
              feature flags
            </li>
            <li>
              Deployed and validated Production releases on a two-week cadence
              in alignment with Agile Sprints
            </li>
          </ul>
          <div>
            <div>Site Reliability Engineer</div>
            <div>Sept 2019 - Jan 2022</div>
          </div>
          <p>Ally Bank, Charlotte, NC</p>
          <ul>
            <li>
              Determined and adhered to Service-Level Objectives, measured via
              Service-Level Indicators (99th percentile thresholds for errors
              and performance)
            </li>
            <li>
              Created and maintained dashboards and alerting for entire web data
              flow (front-end & back-end) for faster incident detection and
              better mean-time-to-resolution (third-party tools used include
              Splunk, LogRocket, DataDog, and Dynatrace)
            </li>
            <li>
              Migrated front-end infrastructure from mono-repo in BitBucket
              deployed via Jenkins and Kubernetes to federated application in
              GitLab deployed via GitLab CI and Cloud Platform AWS
            </li>
            <li>
              Monitored Production releases on a two-week cadence in alignment
              with Agile Sprints
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
