import fs from 'fs';
import path from 'path';
import { Dropbox } from 'dropbox';
import { fileURLToPath } from 'url'; // importiere fileURLToPath

// Dein Dropbox Access-Token hier einfügen
const dbx = new Dropbox({ accessToken: 'sl.u.AFl3Ea6-Am47zwnBt26cUsgqRFD0YXYCeMLV-RviJT1JmpKKVpLVgyhdZPXCvBCfXEi6FJTT3dcKyFt23apNsFHiv9s3LVFGS50Rs6wRIhF_nIH7-l8fpFEY5bDNnFTGOSNLliU3lhB9-I70VOD4bk8WAInloDX-EGiip7voiQxDAVyr7FFie3uPJRz4_ECNOVisshS9856OKBuRgTIUgNGa0LD1rIY7r9HaXbHzP0Ttn-8ziiSl6tEYU1SZUMjJiSedWT1UfFcIvIGyS10BhIZ_M9GTTwA5LJwN8WqclCSUQJx3z_7GyBOSzFSnkf9dfQ1eAx-WEJY-2rWhpM585uSsJRyHgwHSWsRQe584sjE1FRK6TPDyeB7n0Y9JRx7twbPOea4aP3XdzLUQ0wtXrdtmCOGgaWKJEZIzbXcTZFULuoSs58NColUAnKA6oTKMF_wEv-GEKqjfco1v2003-mV8li0xVY86vK3rdMpSbgalt7C-7wvjkaOOQTArSU4hzLRBak86LimiPYDh2mWsBYL7DmOCuFkqdeGH3vV0d6XkrY7jJiNciVmg3Rbeo8MhcS4qBibpp64R2YtnZl7nPsCK-i7ivkYx_yVhaXnN58gXHbnQEWbMvugYTZkP30ZUwME5K9JiEBIgBJJvk7o3wxi_jwqO08NzliJDzEmFllUZLGVQFe7EY6lnXFBixO3boImTDWU0AsPfBCUaf9mltzzPNbUpgOoIkiZ0IyXIlRhpMlZUKw-hxkrQ0ZHbTsOx5aScA1_p09m-XC6hzYb_j8GqmmJt25sCHRezNXtdRrh-eXLH1Oryri_XfiTk1P824c6-4ISMv-ow1vi0wPvdZ8Q-XKgoAC5YDRrMDVhf5MfEo4D9Al-EPQrZfKq0KJieU46CTXk5IW9kxubVnAdOakU_RBDzWInrgjbCw20vWdXlf3N4kdLKmEblJljAOPAI80hrd-ypv-6qoE5nwG2eAuOx6xr3XXE_K_yEXcyq4kp2PRx9BNlGOKAcF5Nvt3KTf8W-aGjkyqLGW5JAuggcraYuwyIQ8xDEQ_xmGFDUeQx-mSUDZK9yOZOgEtRYLJS-B3xrzr6IsOaC6yDLxZYDYEkN5B-RMqi7JeBfLOxMnHTz-FWbCLusbcxL4D4iftxhI1AUiJWWjVA3Tp9RGkutE5TfYZ3tC6zydpUD_OWUcffi7ZmjQhxU-MSzHUMgiHAHKAPkXzjmEiSzAlx8_LvCUmcCGh-yZO9LegoJmfe8CMMxLYmI6JUkjhPslkzXa1qjSuxwQTp3S_sJ-EkbgRw_M_n8fCMKAw_SqyvVMYyB3k3fAGZdbIy6Ij2HPcI97sv--zLU31ioXncbT95ovbrWqxdUL8FUj3-BdX7ERqZnofBXG-fQCnAYfd9_yFiqtY7hUYx4pZ7vH-CiDYmzN6-vQKDs' });

// Um __dirname in einem ES-Modul zu simulieren:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pfad zu deiner orders.json-Datei
const ordersFilePath = path.join(__dirname, '../server/orders.json'); // Ändere den Pfad je nach Bedarf

// Lade die Datei von deinem lokalen Speicher und lade sie auf Dropbox hoch
fs.readFile(ordersFilePath, (err, data) => {
    if (err) {
        console.error('❌ Error reading local file:', err);
        return;
    }

    dbx.filesUpload({ path: '/orders.json', contents: data })
        .then(response => {
            console.log('✅ File uploaded to Dropbox:', response);
        })
        .catch(uploadError => {
            console.error('❌ Error uploading file to Dropbox:', uploadError);
        });
});
