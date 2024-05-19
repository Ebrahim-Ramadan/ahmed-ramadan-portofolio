export default function Layout({
    children,
    params
}) {
    console.log('Layout params', params);
    return (
        <section className="flex w-full flex-col ">
            {children}

        </section>
    )
}