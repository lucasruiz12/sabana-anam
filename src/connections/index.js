import axios from "axios";
import { ACCESS_KEY_ZOHO, ACCESS_SECRET_ZOHO, apiUrl, EMAIL_ZOHO } from "../constants"

export default {
    genTokenZoho: () => {
        const data = {
            email: EMAIL_ZOHO,
        };

        return axios.create({
            headers: {
                // 'access_key': ACCESS_KEY_ZOHO,
                // 'access_secret': ACCESS_SECRET_ZOHO,
            },
        }).post(`${apiUrl}/gentoken`, data);
    },

    exportTickets: (tokenZoho, data) => {
        return axios.create({
            headers: {
                'Authorization': tokenZoho,
                // 'access_key': ACCESS_KEY_ZOHO,
                // 'access_secret': ACCESS_SECRET_ZOHO,
            },
        }).post(`${apiUrl}/export/filterTickets`, data);
    },
    
    uploadData: (tokenZoho, file) => {

        const formData = new FormData();
        formData.append("fileticket", file);

        return axios.create({
            headers: {
                'Authorization': tokenZoho,
                'access_key': ACCESS_KEY_ZOHO,
                'access_secret': ACCESS_SECRET_ZOHO,
                'Content-Type': 'multipart/form-data',
                'client_name': 'Covivi'
            },
        }).post(`${apiUrl}/upload/tickets/status`, formData);
    },
};

// Idea para orientarse y pedir los dos endpoints.

// // // // conections.genTokenZoho().then(response => {
// // // //     if (response.data.success) {
// // // //         const { auth_token } = response.data.data;
// // // //         setTokenZoho(auth_token);

// // // //         if (cameraReport.dataCamValue.tickets && cameraReport.dataCamValue.tickets.length > 0 && cameraReport.dataCamValue.tickets.some(el => el.active === 1)) {
// // // //             const currentReport = cameraReport.dataCamValue.tickets.find(el => el.active === 1);
// // // //             const dataTicket = {
// // // //                 id_ticket: currentReport.ticket_id
// // // //             };

// // // //             conections.getTicketZoho(dataTicket, auth_token).then(response => {
// // // //                 if (response.data.success) {
// // // //                     const { ticketNumber, subject, status, contact, description, Attachment } = response.data.data;
// // // //                     const createdTime = moment(response.data.data.createdTime).format("DD/MM/YYYY hh:mm a");

// // // //                     const upperName = contact.firstName.substring(0, 1).toUpperCase() + contact.firstName.substring(1, contact.firstName.length);
// // // //                     const upperLastName = contact.lastName.substring(0, 1).toUpperCase() + contact.lastName.substring(1, contact.lastName.length);

// // // //                     const name = `${upperName} ${upperLastName}`;

// // // //                     let newReport = {
// // // //                         ticketNumber,
// // // //                         subject,
// // // //                         createdTime,
// // // //                         status,
// // // //                         name,
// // // //                         description,
// // // //                         Attachment,
// // // //                         newAttachment: "",
// // // //                     };

// // // //                     if (Attachment) {
// // // //                         conections.genTokenMasterZoho().then(response => {
// // // //                             if (response.data.success) {
// // // //                                 const { auth_token_zoho } = response.data.data;

// // // //                                 const arrayImage = [];

// // // //                                 Attachment.forEach(el => {
// // // //                                     const url = el.href;
// // // //                                     conections.getImageZoho(url, auth_token_zoho).then(resp => {
// // // //                                         const buffer = Buffer.from(resp.data, 'binary');
// // // //                                         const base64String = buffer.toString('base64');
// // // //                                         const newAttachment = `data:image/png;base64,${base64String}`;
// // // //                                         arrayImage.push(newAttachment);
// // // //                                     })
// // // //                                         .catch(err => console.error(err));
// // // //                                 });

// // // //                                 newReport = {
// // // //                                     ...newReport,
// // // //                                     newAttachment: arrayImage,
// // // //                                 };
// // // //                             };
// // // //                         })
// // // //                             .catch(err => console.error(err));
// // // //                     };

// // // //                     setDataCurrentReport(newReport);
// // // //                 };
// // // //             })
// // // //                 .catch(err => console.error(err));

// // // //             setReported(true);
// // // //         } else {
// // // //             setReported(false);
// // // //         };
// // // //         setTimeout(() => {
// // // //             setLoading(false);
// // // //         }, 1500);
// // // //     };
// // // // })