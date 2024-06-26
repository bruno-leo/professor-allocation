import { Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Page from '../../components/page';
import ListView from '../../components/listView';

function Course() {
  return (
    <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
      <Page 
        title='Courses'
        rightNode={
          <Button as={Link} to='/courses/create' colorScheme='facebook' mr={10}>
            New Course
          </Button>
        }
      >
        <ListView
          resource='courses'
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
    </Stack>
  );
}

export default Course;