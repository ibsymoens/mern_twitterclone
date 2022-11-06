const path = "../models/";

class DataHandlers {
    static async createData(args) {
        const { model, object } = args;
        const Model = (await import(`${path}${model}.js`)).default;
        const newModel = new Model(object);
        const data = await newModel.save();
        return data;
    }

    static async insertData(args) {
        const { model, object } = args;
        const Model = (await import(`${path}${model}.js`)).default;
        const data = await Model.insert(object);
        return data;
    }

    static async updateData(args) {
        const { model, conditions, newModel } = args;
        const Model = (await import(`${path}${model}.js`)).default;
        const data = await Model.updateOne(conditions, newModel);
        return data;
    }

    static async getData(args) {
        const { model, object } = args;
        const Model = (await import(`${path}${model}.js`)).default;
        let data = {};
        if(!object) {
            data = await Model.find().sort({ createdAt: -1 });
        }else {
            data = await Model.findOne(object);
        }
        return data;
    }

    static async deleteData(args) {
        const { model, object } = args;
        const Model = (await import(`${path}${model}.js`)).default;
        const data = await Model.deleteOne(object);
        return data;
    }
}

export default DataHandlers;