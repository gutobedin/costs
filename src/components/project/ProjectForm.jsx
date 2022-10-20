import Input from '../form/Input'

import styles from './ProjectForm.module.css'

export default function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Digite o orçamento total" name="budget" placeholder="Insira o orçamento total" />

            <select name="category_id" >
                <option disabled selected>Selecione a categoria</option>
            </select>

            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}