import React from "react";
import Grid from "../layout/grid";

export default (props) => (
	<Grid cols={props.cols}>
		<div className="form-group">
			<label htmlFor={props.name}>{props.label}</label>
			{/* Esse input será trocado pelo component="input" em billingCycleForm */}
            <input
				{...props.input}
				className="form-control"
				placeholder={props.placeholder}
				readOnly={props.readOnly}
				type={props.type}
			/>
		</div>
	</Grid>
);
