$(document).ready(function () {

    getMemberDetails();
    listAddresses();
    listContacts();
    getTypes();
    getSorts();

    $('#createUpdateFormAddress').submit(function (e) {
        e.preventDefault();
        saveAddress();
    });

    $('#deleteFormAddress').submit(function (e) {
        e.preventDefault();
        deleteAddress();
    });

    $('#createUpdateFormContact').submit(function (e) {
        e.preventDefault();
        saveContact();
    });

    $('#deleteFormContact').submit(function (e) {
        e.preventDefault();
        deleteContact();
    });

});

function getTypes() {
    $.ajax({
        url: "http://localhost:8080/cm/contacts/types",
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'GET',
        data: {},
        success: function (data) {
            for (let i = 0; i < data.length; i++){
                let option = $('<option></option>');
                option.val(data[i]);
                option.html(data[i]);
                $('#createUpdateType').append(option);
            }
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });
}

function getSorts() {
    $.ajax({
        url: "http://localhost:8080/cm/contacts/sorts",
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'GET',
        data: {},
        success: function (data) {
            for (let i = 0; i < data.length; i++){
                let option = $('<option></option>');
                option.val(data[i]);
                option.html(data[i]);
                $('#createUpdateSort').append(option);
            }
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });
}

function saveAddress() {
    let type = 'POST';
    let text = 'erstellt';
    let form_data = {
        'address': $('#createUpdateAddress').val(),
        'code': $('#createUpdateCode').val(),
        'city': $('#createUpdateCity').val(),
        'fk_member': $('#member_details_id').val()
    };
    if ($('#createUpdateAddressId').val() !== 'new') {
        type = 'PUT';
        text = 'aktualisiert';
        form_data = {
            'id': $('#createUpdateAddressId').val(),
            'address': $('#createUpdateAddress').val(),
            'code': $('#createUpdateCode').val(),
            'city': $('#createUpdateCity').val(),
            'fk_member': $('#member_details_id').val()
        };
    }

    $.ajax({
        url: "http://localhost:8080/cm/addresses",
        headers: {
            'Content-Type': 'application/json'
        },
        type: type,
        data: JSON.stringify(form_data),
        success: function (data) {
            createAlert('Adresse erfolgreich ' + text + '!', 'success');
            listAddresses();
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });

    $('#createUpdateModalAddress').modal('hide');

}

function deleteAddress() {
    let form_data = {
        'id': $('#deleteAddressId').val()
    };
    $.ajax({
        url: "http://localhost:8080/cm/addresses",
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'DELETE',
        data: JSON.stringify(form_data),
        success: function (data) {
            createAlert('Adresse erfolgreich gelöscht!', 'success');
            listAddresses();
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });

    $('#deleteModalAddress').modal('hide');
}

function saveContact() {
    let type = 'POST';
    let text = 'erstellt';
    let form_data = {
        'name': $('#createUpdateName').val(),
        'type': $('#createUpdateType').val(),
        'sort': $('#createUpdateSort').val(),
        'value': $('#createUpdateValue').val(),
        'fk_member': $('#member_details_id').val()
    };
    if ($('#createUpdateContactId').val() !== 'new') {
        type = 'PUT';
        text = 'aktualisiert';
        form_data = {
            'id': $('#createUpdateContactId').val(),
            'name': $('#createUpdateName').val(),
            'type': $('#createUpdateType').val(),
            'sort': $('#createUpdateSort').val(),
            'value': $('#createUpdateValue').val(),
            'fk_member': $('#member_details_id').val()
        };
    }

    $.ajax({
        url: "http://localhost:8080/cm/contacts",
        headers: {
            'Content-Type': 'application/json'
        },
        type: type,
        data: JSON.stringify(form_data),
        success: function (data) {
            createAlert('Kontaktmöglichkeit erfolgreich ' + text + '!', 'success');
            listContacts();
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });

    $('#createUpdateModalContact').modal('hide');

}

function deleteContact() {
    let form_data = {
        'id': $('#deleteContactId').val()
    };
    $.ajax({
        url: "http://localhost:8080/cm/contacts",
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'DELETE',
        data: JSON.stringify(form_data),
        success: function (data) {
            createAlert('Kontaktmöglichkeit erfolgreich gelöscht!', 'success');
            listContacts();
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });

    $('#deleteModalContact').modal('hide');
}

function getMemberDetails() {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');

    $.ajax({
        url: "http://localhost:8080/cm/members/" + id,
        type: "GET",
        data: {},
        success: function (data) {
            $('#member_details_id').val(data.id);
            $('#member_details_firstname').val(data.firstname);
            $('#member_details_lastname').val(data.lastname);
            $('#member_details_company').val(data.company);
            $('#page_title').html(data.firstname + ' ' + data.lastname);
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });
}

function listAddresses() {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');

    $.ajax({
        url: "http://localhost:8080/cm/addresses/frommember/" + id,
        type: "GET",
        data: {},
        success: function (data) {
            $('#tableBodyAddresses').html('');
            for (let i = 0; i < data.length; i++) {
                createTupelAddress(data[i].id, data[i].address, data[i].code, data[i].city);
            }
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });
}

function listContacts() {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');

    $.ajax({
        url: "http://localhost:8080/cm/contacts/frommember/" + id,
        type: "GET",
        data: {},
        success: function (data) {
            $('#tableBodyContacts').html('');
            for (let i = 0; i < data.length; i++) {
                createTupelContact(data[i].id, data[i].name, data[i].value, data[i].type, data[i].sort);
            }
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });
}

function createTupelAddress(id, address, code, city) {

    let tr = $('<tr></tr>');
    let th_1 = $('<td></td>');
    let th_2 = $('<td></td>');
    let th_3 = $('<td></td>');
    let th_4 = $('<td></td>');

    th_1.html(address);
    th_2.html(code);
    th_3.html(city);

    let updateButton = createIconButton('edit', 'warning');
    $(updateButton).addClass('mr-2');
    $(updateButton).on("click", function () {
        updateAddress(id, address, code, city);
    });

    let deleteButton = createIconButton('trash', 'danger');
    $(deleteButton).on("click", function () {
        deleteAddressModal(id, address, code, city);
    });

    th_4.append(updateButton);
    th_4.append(deleteButton);

    $(tr).append(th_1, th_2, th_3, th_4);

    $('#tableBodyAddresses').append(tr);
}

function createTupelContact(id, name, value, type, sort) {

    let tr = $('<tr></tr>');
    let th_1 = $('<td></td>');
    let th_2 = $('<td></td>');
    let th_3 = $('<td></td>');
    let th_4 = $('<td></td>');
    let th_5 = $('<td></td>');

    th_1.html(name);
    th_2.html(value);
    th_3.html(type);
    th_4.html(sort);

    let updateButton = createIconButton('edit', 'warning');
    $(updateButton).addClass('mr-2');
    $(updateButton).on("click", function () {
        updateContact(id, name, value, type, sort);
    });

    let deleteButton = createIconButton('trash', 'danger');
    $(deleteButton).on("click", function () {
        deleteContactModal(id, name, value, type, sort);
    });

    th_5.append(updateButton);
    th_5.append(deleteButton);

    $(tr).append(th_1, th_2, th_3, th_4, th_5);

    $('#tableBodyContacts').append(tr);
}

function createAddress() {
    $('#createUpdateAddressId').val('new');
    $('#createUpdateAddress').val('');
    $('#createUpdateCode').val('');
    $('#createUpdateCity').val('');
    $('#createModalTitleAddress').html('Addrese erstellen');
    $('#createUpdateModalAddress').modal('show');
}

function updateAddress(id, address, code, city) {
    $('#createUpdateAddressId').val(id);
    $('#createUpdateAddress').val(address);
    $('#createUpdateCode').val(code);
    $('#createUpdateCity').val(city);
    $('#createModalTitleAddress').html('Addrese aktualisieren');
    $('#createUpdateModalAddress').modal('show');
}

function deleteAddressModal(id, address, code, city) {
    $('#deleteAddressId').val(id);
    $('#deleteAddressText').html(address + ', ' + code + ', ' + city);
    $('#deleteModalAddress').modal('show');
}

function createContact() {
    $('#createUpdateContactId').val('new');
    $('#createUpdateName').val('');
    $('#createUpdateType').val('');
    $('#createUpdateSort').val('');
    $('#createUpdateValue').val('');
    $('#createModalTitleContact').html('Kontaktmöglichkeit erstellen');
    $('#createUpdateModalContact').modal('show');
}

function updateContact(id, name, value, type, sort) {
    $('#createUpdateContactId').val(id);
    $('#createUpdateName').val(name);
    $('#createUpdateType').val(type);
    $('#createUpdateSort').val(sort);
    $('#createUpdateValue').val(value);
    $('#createModalTitleContact').html('Kontaktmöglichkeit aktualisieren');
    $('#createUpdateModalContact').modal('show');
}

function deleteContactModal(id, name, value, type, sort) {
    $('#deleteContactId').val(id);
    $('#deleteContactText').html(name + ': ' + value);
    $('#deleteModalContact').modal('show');
}

function createIconButton(icon, color) {
    let button = $('<button></button>');
    $(button).attr("class", "btn, btn-" + color);
    button.html('<i class="fa fa-' + icon + '"></i>')
    return button;
}

function createAlert(message, color, dismiss = true) {
    if (dismiss) {
        $('#alerts').html('');
    }

    let div = $('<div></div>');
    $(div).attr("class", "alert alert-" + color + " alert-dismissible fade show");
    $(div).attr("role", "alert");
    $(div).append(message);
    let button = "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    $(div).append(button);
    $('#alerts').append(div);
}