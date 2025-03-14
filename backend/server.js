const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public/models" folder
app.use('/models', express.static(path.join(__dirname, '../public/models')));

// 3D Model Data
const modelData = {
  
  
    "heart": {
      "modelUrl": "/heart.glb",
      "description": "A 3D model of a human heart."
    },
   
    "kidney": {
      "modelUrl": "/models/kidney.glb",
      "description": "A 3D model of a human kidney."
    },
    "brain": {
      "modelUrl": "/models/brain.glb",
      "description": "A 3D model of the human brain."
    },
    "solar system": {
      "modelUrl": "/models/solarsystem.glb",
      "description": "A 3D model of the solar system."
    },
    "lungs": {
      "modelUrl": "/models/lungs.glb",
      "description": "A 3D model of human lungs."
    },
    "skeleton": {
      "modelUrl": "/models/skeleton.glb",
      "description": "A 3D model of the human skeleton."
    },
    "digestive system": {
      "modelUrl": "/models/digestivesystem.glb",
      "description": "A 3D model of the human digestive system."
    },
    "excretory system": {
      "modelUrl": "/models/excretorysystem.glb",
      "description": "A 3D model of the human excretory system."
    },
    "vagina": {
      "modelUrl": "/models/frs.glb",
      "description": "A 3D model of the human female reproductive system."
    },
   
    "atom": {
      "modelUrl": "/models/atom.glb",
      "description": "A 3D model of an atom."
    },
   
    
    "animal cell": {
      "modelUrl": "/models/animalcell.glb",
      "description": "A 3D model of a animal cell."
    }
    ,
    "dna": {
      "modelUrl": "/models/dna.glb",
      "description": "A 3D model of a dna."
    },
    "crystal splitting": {
      "modelUrl": "/models/crystalsplitting.glb",
      "description": "A 3D model of a crystal splitting."
    }
  ,"dorbital": {
      "modelUrl": "/models/dorbitals.glb",
      "description": " 3D models of a d orbitals ."
    }
    ,"oxidation of methane": {
      "modelUrl": "/models/r.glb",
      "description": " 3D models of a oxidation of methane ."
    },"cosine": {
      "modelUrl": "/models/cosine.glb",
      "description": " 3D models of a cosine ."
    }
    ,"plant cell": {
      "modelUrl": "/models/plantcell.glb",
      "description": " 3D models of a plant cell."
    },"neural": {
      "modelUrl": "/models/neural.glb",
      "description": " 3D models of a neural ."
    }
};


app.post('/chat', (req, res) => {
  const prompt = req.body.message.toLowerCase();

  if (modelData[prompt]) {
    const model = modelData[prompt];
    res.json({
      reply: `Here is the ${prompt} model`,
      modelUrl: model.modelUrl,
      description: model.description,
    });
  } else {
    res.status(404).json({
      reply: "Sorry, I could not find a model for that prompt.",
      modelUrl: null,
      description: null,
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
