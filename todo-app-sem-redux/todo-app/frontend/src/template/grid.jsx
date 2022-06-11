import React, { Component } from "react";

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(" ") : [];
    let classes = "";

    if (cols[0]) classes += `col-xs-${cols[0]}`;
    else if (cols[1]) classes += `col-sm-${cols[1]}`;
    else if (cols[2]) classes += `col-md-${cols[2]}`;
    else if (cols[3]) classes += `col-lg-${cols[3]}`;

    return classes;
  }

  render() {
    // se cols não for setado o componente irá ocupar a tela inteira (12 colunas)
    const gridClasses = this.toCssClasses(this.props.cols || 12);
    return <div className={gridClasses}>{this.props.children}</div>;
  }
}
