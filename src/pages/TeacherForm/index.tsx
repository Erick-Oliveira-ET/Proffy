import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que voce quer dar aula."
                description="O primeiro passo é preencher o formulário de inscrição"
            /> 

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <TextArea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria" 
                        options={[
                            {value: "Biologia", label:"Biologia"},
                            {value: "Programação", label:"Programação"},
                            {value: "Ciências", label:"Ciências"},
                            {value: "Matemática", label:"Matemática"},
                            {value: "Física", label:"Física"}
                        ]}
                     />

                    <Input name="cost" label="Custo da sua hora/aula"/>

                </fieldset>


                <fieldset>
                    <legend>Horários Disponiveis
                        <button type="button">
                            + Novo Horário
                        </button>
                        
                    </legend>

                    <div className="schedule-item">
                        <Select name="subject" label="Matéria" 
                            options={[
                                {value: "0", label:"Domingo"},
                                {value: "1", label:"Segunda-feira"},
                                {value: "2", label:"Terça-feira"},
                                {value: "3", label:"Quarta-feira"},
                                {value: "4", label:"Quinta-feira"},
                                {value: "5", label:"Sexta-feira"},
                                {value: "6", label:"Sábado"}
                            ]}
                        />

                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="às" type="time" />
                    </div>
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados!
                    </p>

                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;