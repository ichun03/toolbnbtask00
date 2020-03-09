import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

export const Card =({info})=>{
 return(
    <div>
    
    
    {info.map((infos) =>(

    <Container textAlign='left'>Left Aligned</Container>
    <Container textAlign='center'>Center Aligned</Container>
    <Container textAlign='right'>Right Aligned</Container>
    
    <Container textAlign='justified'>
      <b>{infos.Name}</b>
      <Divider />
      <p>{infos.Toldescribe}</p>
     
    </Container>

    
    ))}

   </div>

};