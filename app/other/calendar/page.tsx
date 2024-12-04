import React, { useEffect, useState } from "react";

const EconomicCalendar = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Запрос к API
        fetch("http://localhost:5000/api/economic-calendar")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                setEvents(data.data || []);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-4 text-danger">Error: {error}</div>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center">Economic Calendar</h1>
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Currency</th>
                        <th>Impact</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td>{event.Time}</td>
                            <td>{event.Currency}</td>
                            <td>{event.Impact}</td>
                            <td>{event.Event}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EconomicCalendar;
