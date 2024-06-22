import { Button, Center, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Page from '../../components/page';
import ListView from '../../components/listView';

function Allocation() {
  return (
    <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
      

        <Page 
          title='Allocations'
          rightNode={
            <Button as={Link} to='/allocations/create' colorScheme='facebook' mr={10}>
              New Allocation
            </Button>
          }
        >
          <ListView
            resource='allocations'
            tableProps={{
              columns: [
                {
                  key: 'id',
                  label: 'ID',
                },
                {
                  key: 'day',
                  label: 'Day Of Week',
                },
                {
                  key: 'startHour',
                  label: 'Start Hour',
                },
                {
                  key: 'endHour',
                  label: 'End Hour',
                },
                {
                  key: 'professor',
                  label: 'Professor',
                  render: (professor) => {
                    return professor.name;
                  },
                },
                {
                  key: 'course',
                  label: 'Course',
                  render: (course) => {
                    return course.name;
                  },
                },
              ],
            }}
          />
        </Page>
      
    </Stack>
  );
}

export default Allocation;