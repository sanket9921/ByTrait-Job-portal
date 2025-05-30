import React, { useEffect, useState } from 'react';
import { getallcompanyJobs } from '../../services/jobService';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await getallcompanyJobs();
                console.log( response);
                setJobs(response);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);



    return (
        <div className='container'>
            <table className='table'>
                <thead >
                    <tr>
                        <th>Job Title</th>
                        <th>Applications</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {jobs.map((job) => (
                    <tr style={{ verticalAlign: 'middle' }}>
                        <td>
                            <h4>
                                {job.title}
                            </h4>
                            <p className='text-muted'>
                                <i className="bi bi-building text-primary ms-1"></i> {job.Industry.name}  
                                <i className="bi bi-clock text-primary ms-1"></i> {job.jobType}  
                                <i className="bi bi-currency-dollar text-primary ms-1"></i> Rs {job.minSalary} - Rs {job.maxSalary}  
                                <i className="bi bi-geo-alt text-primary ms-1"></i> {job.location}
                            </p>
                        </td>
                        <td className='text-primary '>
                            
                            <i className="bi bi-people-fill "></i> 
                            
                            (23)Applications
                            
                            
                        </td>
                        <td>
                            <button className='btn btn-primary me-2'>
                                <i className="bi bi-eye"></i> View Post
                            </button>
                            <button className='btn btn-danger'>
                                <i className="bi bi-trash"></i> Delete
                            </button>
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default JobList;

