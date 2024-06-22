import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Page from '../../components/page';
import ListView from '../../components/listView';

function Professor() {
  return (
    <Page 
      title='Professors'
      rightNode={
        <Button as={Link} to='/professors/create' colorScheme='facebook' mr={10}>
          New Professor
        </Button>
      }
    >
      <ListView
        resource='professors'
        tableProps={{
          columns: [
            {
              key: 'id',
              label: 'ID',
            },
            {
              key: 'name',
              label: 'Name',
            },
            {
              key: 'cpf',
              label: 'CPF',
            },
            {
              key: 'department',
              label: 'Department',
              render: (department) => {
                return <span style={{ color: 'blue' }}>{department.name}</span>;
              },
            },
          ],
        }}
      />
    </Page>
  );
}

export default Professor;