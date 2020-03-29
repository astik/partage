This project was created in order to centralize localization for objects that can be shared among a community (building, neighboorhood, association, ...).

## Development

### Prerequisite

You'll need to define a Google Spreadsheet for the data.

Expected columns are :

- Catégorie (Either _Bricologe_, _Cuisine_, _Puericulture_, _Maison_)
- Nom
- one column for each person

For example:

| Catégorie    | Nom                   | Bob | Yvette | Jocko |
| ------------ | --------------------- | --- | ------ | ----- |
| Bricolage    | Clés à molette        | 1   | 1      | 1     |
| Bricolage    | Escabeau              | 1   |        | 1     |
| Cuisine      | Appareil à raclette   | 1   |        | 1     |
| Cuisine      | Batteur électrique    | 1   |        | 1     |
| Maison       | Fer à repasser        | 1   | 1      | 1     |
| Maison       | Planche à repasser    |     |        | 1     |
| Puericulture | Siège auto - 2 à 29kg |     | 1      |       |
| Puericulture | Siège auto - 2 à 25kg | 1   | 1      |       |

Then you'll need to share this spreadsheet, to do so, follow _Tabletop_ documentation https://github.com/jsoma/tabletop#1-publishing-your-google-sheet.

Finally, set the Spreadsheet shared URL into a `.env` file at project root :

```
REACT_APP_SPREADSHEET_URL=https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxx/edit
```

### Workflow

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The usual commands are available :

```
npm run start
npm run test
npm run build
```

You can also eject, but there is no need to =D
