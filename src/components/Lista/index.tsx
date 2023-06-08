import { ITarefa } from '../../types/tarefa';
import Item from './Item/Item';
import style from './Lista.module.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item                        
                        key={item.id}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        selecionado={item.selecionado}
                        completado={item.completado}
                        id={item.id}
                        selecionaTarefa={selecionaTarefa}
                        // {...item}
                    />                    
                ))}
            </ul>
        </aside>
    )
}

export default Lista;