import ButtonComponent from "./ButtonComponent"

const Buttons = () => {
  return (
    <div className="container">
        <h1>Buttons</h1>

            <div className="row">
                <div className="content">
                    <p>{'<Button />'}</p>
                    <ButtonComponent />
                </div>
            </div>

            <div className="row">
                <div className="content">
                    <p>{'<Button variant="outline"/>'}</p>
                    <ButtonComponent variant='outline'/>
                </div>
            </div>

            <div className="row">
                <div className="content">
                    <p>{'<Button variant="text" />'}</p>
                    <ButtonComponent variant='text'/>
                </div>
            </div>
            
            <div className="row">
                <div className="content">
                    <p>{'<Button disableShadow />'}</p>
                    <ButtonComponent disableShadow />
                </div>
            </div>

            <div className="row">
                <div className="content">
                    <p>{'<Button disabled />'}</p>
                    <ButtonComponent disabled />
                </div>

                <div className="content">
                    <p>{'<Button variant="text" disabled />'}</p>
                    <ButtonComponent variant='text' disabled />
                </div>
            </div>

            <div className="row">
                <div className="content">
                    <p>{'<Button startIcon />'}</p>
                    <ButtonComponent startIcon />
                </div>

                <div className="content">
                <p>{'<Button endIcon />'}</p>
                    <ButtonComponent endIcon />
                </div>
            </div>

            <div className="row">
                <div className="content">
                    <p>{'<Button size="sm" />'}</p>
                    <ButtonComponent size='sm' />
                </div>

                <div className="content">
                <p>{'<Button size="md" />'}</p>
                    <ButtonComponent size='md' />
                </div>

                <div className="content">
                <p>{'<Button size="lg" />'}</p>
                    <ButtonComponent size='lg' />
                </div>
            </div>

            <div className="row">
                <div className="content">
                    <p>{'<Button color="default" />'}</p>
                    <ButtonComponent color='default' />
                </div>

                <div className="content">
                <p>{'<Button color="primary" />'}</p>
                    <ButtonComponent color='primary' />
                </div>

                <div className="content">
                <p>{'<Button color="secondary" />'}</p>
                    <ButtonComponent label='secondary' color='secondary' />
                </div>

                <div className="content">
                <p>{'<Button color="danger" />'}</p>
                    <ButtonComponent label='Danger' color='danger' />
                </div>
            </div>
        </div>
  )
}

export default Buttons