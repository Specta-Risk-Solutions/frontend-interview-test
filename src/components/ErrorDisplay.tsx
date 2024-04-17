export default function ErrorDisplay({ error }: {error: any}) {
    return (
        <p className='text-red-500'>Error: {error}</p>
    )
}