import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ModuleList() {
    const [modules, setModules] = useState([]);

    useEffect(() => {
        axios.get('/api/modules/')  // Fetch from Django API
            .then(response => setModules(response.data))
            .catch(error => console.error('Error fetching modules:', error));
    }, []);

    return (
        <div>
            <h2>Modules</h2>
            <ul>
                {modules.map(module => (
                    <li key={module.course_module_id}>
                        <Link to={`/module/${module.course_module_id}`}>{module.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ModuleList;