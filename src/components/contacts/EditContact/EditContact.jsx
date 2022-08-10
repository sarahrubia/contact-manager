import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactsService";
import Spinner from "../../navbar/spinner/Spinner";

let EditContact = () => {
  let navigate = useNavigate();
  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      phoneNumber: "",
      email: "",
      company: "",
      title: "",
      groupId: "",
      cep: "",
      logradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
    groups: [],
    errorMessage: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState({
          ...state,
          loading: true,
        });
        let response = await ContactService.getContact(contactId);
        let groupResponse = await ContactService.getGroups();

        setState({
          ...state,
          loading: false,
          contact: response.data,
          groups: groupResponse.data,
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

  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: [event.target.value],
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate(`/contacts/edit/${contactId}`, { replace: false });
    }
  };

  let { loading, contact, groups, errorMessage } = state;

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="add-contact p-3">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="h4 text-primary fw-bold">Editar contato</p>
                  <p className="fst-italic">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odio earum minima dicta similique amet totam quae quia
                    tempora porro, eum deleniti error ratione perspiciatis
                    fugiat obcaecati magni? Itaque, quas vel.
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="name"
                        value={contact.name}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="photo"
                        value={contact.photo}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="URL da foto"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="phoneNumber"
                        value={contact.phoneNumber}
                        onChange={updateInput}
                        type="number"
                        className="form-control"
                        placeholder="Número de telefone"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="email"
                        value={contact.email}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        required={true}
                        name="company"
                        value={contact.company}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="Empresa"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        className="form-control"
                        placeholder="Título"
                        required={true}
                        name="title"
                        value={contact.title}
                        onChange={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        className="form-control"
                        required={true}
                        name="groupId"
                        value={contact.groupId}
                        onChange={updateInput}
                      >
                        <option value="">Selecione um grupo</option>
                        {groups.length > 0 &&
                          groups.map((group) => {
                            return (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CEP"
                        required={true}
                        name="cep"
                        value={contact.cep}
                        onChange={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Logradouro"
                        required={true}
                        name="logradouro"
                        value={contact.logradouro}
                        onChange={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bairro"
                        required={true}
                        name="bairro"
                        value={contact.bairro}
                        onChange={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cidade"
                        required={true}
                        name="cidade"
                        value={contact.cidade}
                        onChange={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Estado"
                        required={true}
                        name="estado"
                        value={contact.estado}
                        onChange={updateInput}
                      />
                    </div>

                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Atualizar"
                      />
                      <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                        Cancelar
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img src={contact.photo} alt="" className="contact-img" />
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditContact;
