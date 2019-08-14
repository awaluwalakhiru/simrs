/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";
$(function () {
    $("a.logout").click(function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        swal({
            title: 'Yakin mau logout?',
            text: 'Terima kasih telah menggunakan aplikasi kami.',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    location.href = href;
                }
            });
    });
    $("a.hapus").click(function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        swal({
            title: 'Yakin akan menghapus data?',
            text: 'Data akan dihapus.',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    location.href = href;
                }
            });
    });

});