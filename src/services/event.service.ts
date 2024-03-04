export class EventService {
    async sendEvent(type: string, payload: any) {
        const timestamp = Date.now();
        const eventData = {
            type,
            payload,
            timestamp
        };

        try {
            // '/api/sendEvent'
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData)
            });

            if (!response.ok) {
                throw new Error('Failed to send event');
            }
        } catch (error) {
            console.error('Error sending event:', error);
        }
    }
}

export const eventService = new EventService();
