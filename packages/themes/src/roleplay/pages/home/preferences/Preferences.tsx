import React from 'react';
import {EmailPreferences} from './tabs/email';
import {ProfilePreferences} from './tabs/profile';
import {SecurityPreferences} from './tabs/security';
import {UserLayout} from '../../../components/layout/user';
import {
  Container,
  Jumbotron,
  Loading,
  Row,
  setURL,
  NavTabs,
  Icon,
} from '@instinct-prj/frontend';

setURL('preferences', <PreferencesPage />);

export function PreferencesPage() {
  return (
    <UserLayout section="settings_">
      <Loading isLoading={false}>
        <Jumbotron title="Account Settings">
          <p>
            Set your preferences, update your email, and secure your account
            from your personal portal.
          </p>
        </Jumbotron>
        <Container>
          <Row>
            <NavTabs
              tabs={[
                {
                  text: <Icon type="lock" />,
                  children: <SecurityPreferences />,
                },
                {
                  text: <Icon type="envelope" />,
                  children: <EmailPreferences />,
                },
                {
                  text: <Icon type="user" />,
                  children: <ProfilePreferences />,
                },
              ]}
            />
          </Row>
        </Container>
      </Loading>
    </UserLayout>
  );
}
