import { join } from 'path';
import { readFile } from 'fs/promises';

export async function GET() {
    const filePath = join(process.cwd(), 'Starphone-readonly.pptx');
    const file = await readFile(filePath);

    return new Response(file, {
        headers: {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'Content-Disposition': 'attachment; filename="Starphone-readonly.pptx"'
        }
    });
}