$(document).ready(function () {

    listMembers();

    $('#createUpdateForm').submit(function (e) {
        e.preventDefault();
        saveMember();
    });

    $('#deleteForm').submit(function (e) {
        e.preventDefault();
        deleteMember();
    });

});

function listMembers() {
    $.ajax({
        url: "http://localhost:8080/cm/members",
        type: "GET",
        data: {},
        success: function (data) {
            $('#tableBody').html('');
            for (let i = 0; i < data.length; i++) {
                createTupel(data[i].id, data[i].firstname, data[i].lastname, data[i].company);
            }
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });
}

function saveMember() {
    let type = 'POST';
    let text = 'erstellt';
    let form_data = {
        'firstname': $('#createUpdateFirstname').val(),
        'lastname': $('#createUpdateLastname').val(),
        'company': $('#createUpdateCompany').val()
    };
    if ($('#createUpdateMemberId').val() !== 'new') {
        type = 'PUT';
        text = 'aktualisiert';
        form_data = {
            'id': $('#createUpdateMemberId').val(),
            'firstname': $('#createUpdateFirstname').val(),
            'lastname': $('#createUpdateLastname').val(),
            'company': $('#createUpdateCompany').val()
        };
    }

    $.ajax({
        url: "http://localhost:8080/cm/members",
        headers: {
            'Content-Type': 'application/json'
        },
        type: type,
        data: JSON.stringify(form_data),
        success: function (data) {
            createAlert('Kunde erfolgreich ' + text + '!', 'success');
            listMembers();
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });

    $('#createUpdateModal').modal('hide');
}

function deleteMember() {
    let form_data = {
        'id': $('#deleteMemberId').val()
    };
    $.ajax({
        url: "http://localhost:8080/cm/members",
        headers: {
            'Content-Type': 'application/json'
        },
        type: 'DELETE',
        data: JSON.stringify(form_data),
        success: function (data) {
            createAlert('Kunde erfolgreich gelöscht!', 'success');
            listMembers();
        },
        error: function (response) {
            createAlert('AJAX not working...', 'danger');
        },
    });

    $('#deleteModal').modal('hide');
}

function createTupel(id, firstname, lastname, company) {

    let tr = $('<tr></tr>');
    let th_1 = $('<td></td>');
    let th_2 = $('<td></td>');
    let th_3 = $('<td></td>');
    let th_4 = $('<td></td>');

    th_1.html(firstname);
    th_2.html(lastname);
    th_3.html(company);

    let openButton = createIconButton('search', 'info');
    $(openButton).addClass('mr-2');
    $(openButton).on("click", function () {
        window.location.href = "member.html?id=" + id;
    });

    let updateButton = createIconButton('edit', 'warning');
    $(updateButton).addClass('mr-2');
    $(updateButton).on("click", function () {
        updateMember(id, firstname, lastname, company);
    });

    let deleteButton = createIconButton('trash', 'danger');
    $(deleteButton).on("click", function () {
        deleteMemberModal(id, firstname, lastname);
    });

    th_4.append(openButton);
    th_4.append(updateButton);
    th_4.append(deleteButton);

    $(tr).append(th_1, th_2, th_3, th_4);

    $('#tableBody').append(tr);
}

function createIconButton(icon, color) {
    let button = $('<button></button>');
    $(button).attr("class", "btn, btn-" + color);
    button.html('<i class="fa fa-' + icon + '"></i>')
    return button;
}

function createMember() {
    $('#createUpdateMemberId').val('new');
    $('#createUpdateFirstname').val('');
    $('#createUpdateLastname').val('');
    $('#createUpdateCompany').val('');
    $('#createModalTitle').html('Kunde erstellen');
    $('#createUpdateModal').modal('show');
}

function updateMember(id, firstname, lastname, company) {
    $('#createUpdateMemberId').val(id);
    $('#createUpdateFirstname').val(firstname);
    $('#createUpdateLastname').val(lastname);
    $('#createUpdateCompany').val(company);
    $('#createModalTitle').html('Kunde aktualisieren');
    $('#createUpdateModal').modal('show');
}

function deleteMemberModal(id, firstname, lastname) {
    $('#deleteMemberId').val(id);
    $('#deleteMemberText').html(firstname + ' ' + lastname);
    $('#deleteModal').modal('show');
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
