"use client";
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// Интерфейс для описания структуры события
interface EconomicEvent {
    Time: string;
    Currency: string;
    Impact: string;
    Event: string;
}

const EconomicCalendar: React.FC = () => {
    const [events, setEvents] = useState<EconomicEvent[]>([]); // Задаем тип состояния
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Запрос к API
        fetch("/api/economic-calendar") // Используем относительный путь
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                setEvents(data.data || []); // Указываем, что ожидаем массив данных
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
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-4xl w-full">
                <h1 className="text-center text-2xl font-semibold mb-4">Economic Calendar</h1>
                <Table className="w-full border">
                    <TableCaption>List of economic events</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Time</TableHead>
                            <TableHead>Currency</TableHead>
                            <TableHead>Impact</TableHead>
                            <TableHead>Event</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event, index) => (
                            <TableRow key={index}>
                                <TableCell>{event.Time}</TableCell>
                                <TableCell>{event.Currency}</TableCell>
                                <TableCell>{event.Impact}</TableCell>
                                <TableCell>{event.Event}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default EconomicCalendar;
