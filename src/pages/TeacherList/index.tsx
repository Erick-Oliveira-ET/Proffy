import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


import "./styles.css"
function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis.">
                <form action="" id="search-teacher">
                <Select name="subject" label="Matéria" 
                    options={[
                        {value: "Biologia", label:"Biologia"},
                        {value: "Programação", label:"Programação"},
                        {value: "Ciências", label:"Ciências"},
                        {value: "Matemática", label:"Matemática"},
                        {value: "Física", label:"Física"}
                    ]}
                />
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
                    <Input type="time" name="time" label="Hora" />

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;