import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactsService";
import Spinner from "../../navbar/spinner/Spinner";

let ViewContact = () => {
  let { contactId } = useParams();
  let [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
    groupName: {},
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getContact(contactId);
        let groupResponse = await ContactService.getGroup(response.data);
        setState({
          ...state,
          loading: false,
          contact: response.data,
          group: groupResponse.data,
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    }
    fetchData();
  }, [contactId]);

  let { loading, contact, errorMessage, group } = state;

  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-warning fw-bold">Informações do contato</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate magnam nulla error rerum recusandae, obcaecati unde
                consequatur id consectetur perferendis at itaque dicta nemo
                possimus quis tempora nisi quas vel!
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {Object.keys(contact).length > 0 && Object.keys(group).length > 0 && (
            <section className="view-contact mt-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img src={contact.photo} alt="" className="contact-img" />
                  </div>
                  <div className="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Nome:
                        <span className="fw-bold p-2">{contact.name}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Telefone:
                        <span className="fw-bold p-2">
                          {contact.phoneNumber}
                        </span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        E-mail:
                        <span className="fw-bold p-2">{contact.email}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Empresa:
                        <span className="fw-bold p-2">{contact.company}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Grupo
                        <span className="fw-bold p-2">{group.name}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Título
                        <span className="fw-bold p-2">{contact.title}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        CEP:
                        <span className="fw-bold p-2">{contact.cep}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Logradouro:
                        <span className="fw-bold p-2">
                          {contact.logradouro}
                        </span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Bairro:
                        <span className="fw-bold p-2">{contact.bairro}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Cidade:
                        <span className="fw-bold p-2">{contact.cidade}</span>
                      </li>

                      <li className="list-group-item list-group-item-action">
                        Estado:
                        <span className="fw-bold p-2">{contact.estado}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Link to={"/contacts/list"} className="btn btn-warning">
                        Voltar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ViewContact;
