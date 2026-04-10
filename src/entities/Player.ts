import { BoxGeometry, BufferGeometry, Mesh, MeshBasicMaterial, Vector3 } from "three";

export class Player {
    private mesh: Mesh;

    constructor() {
        const geometry = new BoxGeometry(1,1,1);
        
        const materials = [
            new MeshBasicMaterial({ color: 0xff0000 }), 
            new MeshBasicMaterial({ color: 0x00ff00 }),
            new MeshBasicMaterial({ color: 0x0000ff }),
            new MeshBasicMaterial({ color: 0xffff00 }),
            new MeshBasicMaterial({ color: 0xff00ff }),
            new MeshBasicMaterial({ color: 0x00ffff }) 
        ];
        
        this.mesh = new Mesh(geometry, materials)
    }

    public getMesh(): Mesh {
        return this.mesh;
    }
}