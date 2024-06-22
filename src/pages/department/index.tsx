import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Page from '../../components/page';
import ListView from '../../components/listView';

function Department() {
  return (
    <Page 
      title='Departments'
      rightNode={
        <Button as={Link} to='/departments/create' colorScheme='facebook' mr={10}>
          New Department
        </Button>
      }
    >
      <ListView
        resource='departments'
        tableProps={{
          columns: [
            {
              key: 'id',
              label: 'ID',
            },
            {
              label: 'Nome',
              key: 'name',
            },
          ],
        }}
      />
    </Page>
  );
}

export default Department;