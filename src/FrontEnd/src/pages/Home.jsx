import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Our Website!</h1>
            <p style={styles.description}>
                We're excited to have you here. Explore our features and join our community.
            </p>

        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '20px',
    },
    title: {
        fontSize: '2.5rem',
        margin: '20px 0',
        color: '#333',
    },
    description: {
        fontSize: '1.25rem',
        margin: '10px 0 30px',
        textAlign: 'center',
        color: '#666',
        maxWidth: '600px',
    },
    
};

export default Home;
