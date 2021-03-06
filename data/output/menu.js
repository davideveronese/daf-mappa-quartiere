[
    {
        "center" : [],
        "city" : "Milano",
        "id" : "Milano_quartieri",
        "indicators" : [
            {
                "category" : "",
                "dataSource" : "",
                "default" : false,
                "id" : "",
                "label" : ""
            }
        ],
        "joinField" : "IDquartiere",
        "sourceId" : "",
        "type" : "source",
        "url" : "",
        "zoom" : []
    },
    {
        "center" : [],
        "city" : "Milano",
        "id" : "Milano_EducazioneCultura",
        "indicators" : [
            [
                {
                    "category" : "EducazioneCultura",
                    "dataSource" : "MIUR",
                    "id" : "School",
                    "label" : "Scuole"
                },
                {
                    "category" : "EducazioneCultura",
                    "dataSource" : "MIBACT",
                    "id" : "Library",
                    "label" : "Biblioteche"
                }
            ]
        ],
        "joinField" : "IDquartiere",
        "sourceId" : "Milano_quartieri",
        "type" : "layer",
        "url" : "",
        "zoom" : []
    },
    {
        "center" : [],
        "city" : "Milano",
        "id" : "Milano_Vitalita",
        "indicators" : [
            [
                {
                    "category" : "Vitalita",
                    "dataSource" : "ISTAT",
                    "id" : "tipo_di_alloggi",
                    "label" : "tipo_di_alloggi"
                },
                {
                    "category" : "Vitalita",
                    "dataSource" : "ISTAT",
                    "id" : "densita_occupati",
                    "label" : "densita_occupati"
                }
            ]
        ],
        "joinField" : "IDquartiere",
        "sourceId" : "Milano_quartieri",
        "type" : "layer",
        "url" : "",
        "zoom" : []
    },
    {
        "center" : [],
        "city" : "Milano",
        "id" : "Milano_Trasporti",
        "indicators" : [
            [
                {
                    "category" : "Trasporti",
                    "dataSource" : "GTFS Comuni",
                    "id" : "TransportStop",
                    "label" : "Fermate TPL"
                }
            ]
        ],
        "joinField" : "IDquartiere",
        "sourceId" : "Milano_quartieri",
        "type" : "layer",
        "url" : "",
        "zoom" : []
    }
]
