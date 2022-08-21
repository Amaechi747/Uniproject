const message = (name: string, text: string) => `<div style="
                width: 100%;
                height: 100vh;
                background-color: white;
                text-align: center;
                margin: 1rem;
            ">
                <h1 style="
                    color: darkblue;
                    font-size: 1.9rem;
                    font-weight: 700;
                    height: 1fr;
                    padding: 0 3rem 1rem;
                    min-width: 0;
                    border-bottom: 1.3px solid gray;
                ">Sugar Estate</h1>
                <div style="
                    height: 3fr;
                    flex-basis: 27rem;
                    padding: 0 3rem;
                    min-width: 0;
                ">
                    <p style="
                        padding: 2rem;
                        text-align: justify;
                        font-size: 0.9rem;
                        color: gray;
                        min-width: 0;
                        line-height: 2rem;
                    ">
                        <p>Hello ${name},</p>
                        ${text}
                        <p style="text-align: center; color: #ff0000e0;">Link expires in 24hrs</p>
                    </p>
                </div>
                <h3 style="
                    min-width: 0;
                    padding: 0 3rem;
                    color: darkslategrey;
                    height: 1fr;
                ">&copy; Sugar Estate</h3>
            </div>`

export default message;