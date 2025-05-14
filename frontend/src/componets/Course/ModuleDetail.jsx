import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ModuleDetail() {
    const { moduleId } = useParams();
    const [module, setModule] = useState(null);

    useEffect(() => {
        axios.get(`/api/modules/${moduleId}/`)
            .then(response => setModule(response.data))
            .catch(error => console.error('Error fetching module:', error));
    }, [moduleId]);

    if (!module) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
            <div>{module.content}</div>
            {/* Display exercises here */}
        </div>
    );
}

export default ModuleDetail;