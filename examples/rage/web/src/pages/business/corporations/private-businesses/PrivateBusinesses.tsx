import { BusinessRow } from 'components';
import { businessService } from 'app/service';
import { Card, Loading } from 'instinct-frontend';
import { Business } from 'instinct-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { PrivateBusinessesState, defaultPrivateBusinessesState } from './';

export function PrivateBusinesses() {
  const [ state, setState ] = useState<PrivateBusinessesState>(defaultPrivateBusinessesState);

  useEffect(() => {
    async function fetchPrivateBusinesses(): Promise<void> {
      const businesses: Business[] = await businessService.getPrivateBusinesses();
      setState({
        businesses,
        showSpinner: false,
      });
    }

    fetchPrivateBusinesses();
  }, []);

  return (
    <Card>
      <Loading isLoading={state.showSpinner}>
        {
          state.businesses.map(business => (
            <BusinessRow business={business} key={business.id}/>
          ))
        }
      </Loading>
    </Card>
  )

}