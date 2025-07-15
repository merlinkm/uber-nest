import { Controller, Get } from '@nestjs/common';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates() {
        console.log('Rider coordinates endpoint hit');
        // Here you would typically fetch the coordinates from a database or another service.
        // For demonstration purposes, we return a static response.

        // Example response structure
        return {
            message: 'Rider coordinates endpoint',
            data: [
                { latitude: 37.7749, longitude: -122.4194 },
                { latitude: 34.0522, longitude: -118.2437 },
            ],
        };
    }
}
