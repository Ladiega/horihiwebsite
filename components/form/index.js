export default function Form(){
    return(
        <form action="/api/form" method="post">
            <label htmlFor="first">First Name</label>
            <input type="text" id="first" name="first" required />

            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" name="last" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <button type="submit">Submit</button>
        </form>
    )
}