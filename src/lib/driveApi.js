export async function fetchDriveImages(propertyId, apiKey) {
    try {
        // Supondo que você tenha um map de propertyId => folderId
        const folderMap = {
            "1": "1GaoxVU6UT6PiRs5T4jFMRGA18YTl_Vd3",
            "2": "1FN8o2d_zlWEPuDrJOUCsorRqekMlEzaZ",
            "3": "1AVXAfOQ6SKl1EOTEm7-ziQ7PauA76yK4",
            "4": "1YV5TDFJh7z3020733dsxAmkvBaGJO1TZ",
            "5": "17dzWl8bhVmzIkjBUX5d90Xq24TdMuit3",
            "6": "1ol5pSnyzJqJnBn9Gt6wGUsd0ljsRC0S9",
            "7": "129muJ4iM1R6aLuSbOon_0p9GDLdkK0wP",
            "8": "1hsYg961MsPyvw6nBnecBraQ4ZaLtohkT",
            "9": "15u_Nm3FYjHhhNOF_DxyTD_IwoeXILHQ2",
            "10": "1bZWl1b06AnWBwlnJ18G6gAEuh_qk5N2j",
            "11": "1XmSFa6T628GjitSVtGdu2_JODyyOtnl1",
        };
        const folderId = folderMap[propertyId];
        if (!folderId) return [];

        const res = await fetch(
            `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`
        );

        if (!res.ok) throw new Error("Erro ao buscar arquivos do Drive");
        const data = await res.json();

        return data.files.map((f) => ({
            id: f.id,
            name: f.name,
            url: `https://drive.google.com/uc?export=view&id=${f.id}`,
        }));
    } catch (err) {
        console.error(err);
        return [];
    }
}
