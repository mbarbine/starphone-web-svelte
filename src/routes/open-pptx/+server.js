import fs from 'fs';
import { join } from 'path';

export async function GET() {
    const filePath = join(process.cwd(), 'static', 'Starphone-readonly.pptx');
    
    try {
        const file = fs.readFileSync(filePath);
        return new Response(file, {
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'Content-Disposition': 'attachment; filename="Starphone-readonly.pptx"'
            }
        });
    } catch (error) {
        return new Response('File not found', { status: 404 });
    }
}
