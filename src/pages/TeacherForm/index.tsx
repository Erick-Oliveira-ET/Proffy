import React, {useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom'; //used to redirect the user

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();
    //scheduleItems are the values of the state and the setScheduleItems
    //is a that replace the scheduleItems because a React state can't 
    //be changed
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from:'', to:''}
    ]);

    //Because it`s not possible to change the variable, 
    //this function pass all the existing variables on the scheduleItems
    //and pass the new ones to reset the scheduleItems variable
    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from:'', to:''}
        ]);
    }

    const[name, setName] = useState('');
    const[avatar, setAvatar] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[bio, setBio] = useState('');
    const[subject, setSubject] = useState('');
    const[cost, setCost] = useState('');

    function setScheduleItemValue(position: number, field: string, value: string) {
        /*
                This function changes the schedule default values made on addNewScheduleItem function
            and replace it with the value passed in the specific field 
            on a specific schedule position
            Params: 
                position - which order are the schedule
                field - which field (week_day, from, to)
                value - value passed 
        */ 

        const newArray = scheduleItems.map((scheduleItem, index)=>{
            if (index === position) {
                return { ...scheduleItem, [field]: value}; //The Bracket is to make the object be named after the value inside field and as 'field' literally
            }

            return scheduleItem;
        });

        setScheduleItems(newArray);
        
    }

    function handleCreateClass(e: FormEvent) {
        //avoid the default behavior of sending a form(reloading the page)
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert("Cadastro Realizado com Sucesso!!!");
            history.push('/'); //Redirect the user
        }).catch((e)=>{
            console.error(e);
            alert("Falha no Cadastro");
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que voce quer dar aula."
                description="O primeiro passo é preencher o formulário de inscrição"
            /> 

            <main>
                <form onSubmit={handleCreateClass}>

                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome" 
                        value={name} onChange={(e)=>{setName(e.target.value)}}
                     />

                    <Input name="avatar" label="Avatar" 
                        value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}
                    />

                    <Input name="whatsapp" label="Whatsapp" 
                        value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}
                    />
                    
                    <TextArea name="bio" label="Biografia" 
                        value={bio} onChange={(e)=>{setBio(e.target.value)}}
                    />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria" 
                        value={subject} onChange={(e)=>{setSubject(e.target.value)}}
                        options={[
                            {value: "Biologia", label:"Biologia"},
                            {value: "Programação", label:"Programação"},
                            {value: "Ciências", label:"Ciências"},
                            {value: "Matemática", label:"Matemática"},
                            {value: "Física", label:"Física"}
                        ]}
                     />

                    <Input name="cost" label="Custo da sua hora/aula"
                        value={cost} onChange={(e)=>{setCost(e.target.value)}}
                    />

                </fieldset>


                <fieldset>
                    <legend>Horários Disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                        
                    </legend>

                   {scheduleItems.map((scheduleItem, index) => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select name="subject" label="Matéria" 
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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

                                <Input name="from" label="Das" type="time" 
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />

                                <Input name="to" label="às" type="time" 
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        )
                   })}

                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados!
                    </p>

                    <button type="submit">
                        Salvar Cadastro
                    </button>
                </footer>
                </form>

            </main>
        </div>
    );
}

export default TeacherForm;