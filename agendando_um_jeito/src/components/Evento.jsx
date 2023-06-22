import React from 'react';

const MyComponent = () => {
    return (
        <div>
            <h1 className="col-title" style={{ textAlign: 'center', fontWeight: 300, marginBottom: '10%' }}>Nome do Evento</h1>
            <h4 className="title">Nome responsável</h4>
            <h4 className="title">Telefone</h4>

            <div id="container">
                <div className="col">
                    <h1 className="col-title">sexta</h1>
                    <div className="card">
                        <div className="title-container">
                            <h4 className="title">Grupo 1</h4>
                            <div className="count-container">
                                <p>P</p>
                                <p>10</p>
                            </div>
                        </div>
                        <p className="info">08:00 até 10:00</p>
                        <p className="info">3 vagas disponíveis</p>
                        <div className="icon-container">
                            <p className="icon">1</p>
                            <p className="icon">2</p>
                            <p className="icon">3</p>
                            {/* more icons */}
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h1 className="col-title">sábado</h1>
                    <div className="card">
                        <div className="title-container">
                            <h4 className="title">Grupo 1</h4>
                            <div className="count-container">
                                <p>P</p>
                                <p>10</p>
                            </div>
                        </div>
                        <p className="info">08:00 até 10:00</p>
                        <p className="info">3 vagas disponíveis</p>
                        <div className="icon-container">
                            <p className="icon">1</p>
                            <p className="icon">2</p>
                            <p className="icon">3</p>
                            {/* more icons */}
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h1 className="col-title">domingo</h1>
                    <div className="card">
                        <div className="title-container">
                            <h4 className="title">Grupo 1</h4>
                            <div className="count-container">
                                <p>P</p>
                                <p>10</p>
                            </div>
                        </div>
                        <p className="info">08:00 até 10:00</p>
                        <p className="info">3 vagas disponíveis</p>
                        <div className="icon-container">
                            <p className="icon">1</p>
                            <p className="icon">2</p>
                            <p className="icon">3</p>
                            {/* more icons */}
                        </div>
                    </div>
                </div>
            </div>

            <button className="button">
                salvar
                <img src="" alt="" />
            </button>
        </div>
    );
};

export default MyComponent;
