import { Container } from 'react-bootstrap';
import { IdTokenData } from '../components/DataDisplay';
import { useAuth } from '../context/AuthContext';
import baseUrl from '../baseUrl';

export const Home = () => {

    const { account } = useAuth();

    const callTestAPI = async () => {
       await fetch(`${baseUrl}/auth/getUsers`);
    }

    return (
        <>
            <Container>
                {account ? 
                      <> 
                        <IdTokenData idTokenClaims={account.idTokenClaims} /> 
                        <button onClick={callTestAPI}>call test API</button> 
                      </> 
                : null}
                
            </Container>
        </>
    );
};