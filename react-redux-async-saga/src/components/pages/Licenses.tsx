import { VFC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';
import { Licenses } from '../../hooks/repositories';
import Spinner from '../molecules/Spinner';

type Props = {
  licenses: Licenses[];
  isLoading?: boolean;
};

const LicenseList: VFC<Props> = ({ licenses = [], isLoading = false }) => (
  <>
    <Header as="h2">License List</Header>
    {isLoading ? (
      <Spinner />
    ) : (
      <Item.Group>
        {licenses.map((license) => (
          <Item key={license.key}>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{license.name}</Item.Header>
              <Item.Meta>{license.name}</Item.Meta>
              <Item.Meta>{license.url}</Item.Meta>
              <Item.Meta>{license.node_id}</Item.Meta>
              <Item.Meta>{license.spdx_id}</Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    )}
  </>
);

export default LicenseList;
