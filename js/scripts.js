// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.update = function () {

}



var addressBook = new AddressBook();

$(document).ready(function() {
  $("form#contact-info").submit(function(event) {
    event.preventDefault();

    var inputContact = new Contact($("#First-Name").val(), $("#Last-Name").val(), $("#Phone-Number").val());

    addressBook.addContact(inputContact);
    console.log(addressBook);
  });

  $("form#finder-with-id").submit(function(event) {
    event.preventDefault();
    var contactInfo = addressBook.findContact($("#contact-finder").val());
    $("#info-array").text("Name: " + contactInfo.firstName + " " + contactInfo.lastName + " Phone #: " + contactInfo.phoneNumber + " ID: " + contactInfo.id);
    console.log(addressBook.findContact($("#contact-finder").val()));
  });

  $("form#deleter-with-id").submit(function(event) {
    event.preventDefault();
    console.log(addressBook.deleteContact($("#contact-deleter").val()));
  });


});
