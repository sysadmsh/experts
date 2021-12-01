import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿Cual opcion vas a usar en DataProx <strong>DataproX</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Captura de Datos</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Acceso Datos Historicos</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tablero de Control</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Reportes</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Documentacion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;