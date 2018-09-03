import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class TodoTable extends React.Component {
	deleteTodo = (item) => {
		this.props.deleteTodo(item);
	}

	render() {
		const data = this.props.tableData.length > 0 ? this.props.tableData : [{ date: 'No date :(', description: 'No todos. Pls make one.' }];
		const columns = [{
			Header: 'Date',
			accessor: 'date',
		},
		{
			Header: 'Description',
			accessor: 'description',	
		},
		{
			Header: 'Delete',
			accessor: 'delete',
			Cell: props => <button onClick={this.props.deleteTodo.bind(this, props.original)}>DELETE</button>,
		}];

		return(
			<ReactTable
				data={data}
				columns={columns}
			/>
		);
	}
}

export default TodoTable;
